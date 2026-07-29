import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ChannelCard from './ChannelCard';

const icon = <svg aria-hidden="true" />;

describe('ChannelCard', () => {
  it('renders plain text when no href is given', () => {
    render(<ChannelCard icon={icon} text="Encuestas de satisfacción que encontrarás en nuestros centros." />);

    expect(screen.getByText('Encuestas de satisfacción que encontrarás en nuestros centros.')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders the text as an external link when href is given', () => {
    render(<ChannelCard icon={icon} text="Oficina Virtual" href="https://www.ovrmatepss.es/virtual/" />);

    const link = screen.getByRole('link', { name: 'Oficina Virtual' });
    expect(link).toHaveAttribute('href', 'https://www.ovrmatepss.es/virtual/');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
