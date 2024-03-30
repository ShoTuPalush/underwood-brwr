import { Contact } from '@/app/components/Contact/Contact';
import { Modal } from './modal';

export default function PageModal({ children }: { children: React.ReactNode }) {
  return <Modal>{children}</Modal>;
}
