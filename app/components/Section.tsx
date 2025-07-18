import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: 'white' | 'gray';
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = 'white',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-24',
        background === 'gray' ? 'bg-gray-50' : 'bg-white',
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
} 