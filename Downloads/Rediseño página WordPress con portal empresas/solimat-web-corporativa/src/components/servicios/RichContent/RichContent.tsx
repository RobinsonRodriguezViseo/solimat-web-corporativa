import { Fragment } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { isExternalHttpLink, isInternalRoute } from '../../../utils/linkType';
import styles from './RichContent.module.css';

/** Fragmento de texto en línea: literal, énfasis o enlace. */
export type InlineNode =
  | string
  | { kind: 'strong'; text: string }
  | { kind: 'em'; text: string }
  | { kind: 'link'; text: string; href: string };

export interface RichListItem {
  text: InlineNode[];
  /** Lista anidada de segundo nivel. */
  items?: RichListItem[];
}

/** Celdas de una fila de tabla; cada celda es una secuencia de fragmentos en línea. */
export type RichTableRow = InlineNode[][];

export type RichBlock =
  | { kind: 'p'; text: InlineNode[] }
  | { kind: 'h3'; text: string }
  | { kind: 'label'; text: string }
  | { kind: 'list'; items: RichListItem[] }
  | { kind: 'table'; head: string[]; rows: RichTableRow[] };

interface RichContentProps {
  blocks: RichBlock[];
}

function renderLink(text: string, href: string): ReactNode {
  if (isInternalRoute(href)) {
    return <Link to={href}>{text}</Link>;
  }

  if (isExternalHttpLink(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }

  return <a href={href}>{text}</a>;
}

function renderInline(nodes: InlineNode[]): ReactNode {
  return nodes.map((node, index) => {
    if (typeof node === 'string') {
      return <Fragment key={index}>{node}</Fragment>;
    }

    if (node.kind === 'strong') {
      return <strong key={index}>{node.text}</strong>;
    }

    if (node.kind === 'em') {
      return <em key={index}>{node.text}</em>;
    }

    return <Fragment key={index}>{renderLink(node.text, node.href)}</Fragment>;
  });
}

function renderList(items: RichListItem[]): ReactNode {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {renderInline(item.text)}
          {item.items ? renderList(item.items) : null}
        </li>
      ))}
    </ul>
  );
}

export default function RichContent({ blocks }: RichContentProps) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.kind === 'p') {
          return <p key={index}>{renderInline(block.text)}</p>;
        }

        if (block.kind === 'h3') {
          return (
            <h3 key={index} className={styles.h3}>
              {block.text}
            </h3>
          );
        }

        if (block.kind === 'label') {
          return (
            <span key={index} className={styles.label}>
              {block.text}
            </span>
          );
        }

        if (block.kind === 'list') {
          return <Fragment key={index}>{renderList(block.items)}</Fragment>;
        }

        return (
          <div key={index} className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  {block.head.map((cell, cellIndex) => (
                    <th key={cellIndex}>{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{renderInline(cell)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}
