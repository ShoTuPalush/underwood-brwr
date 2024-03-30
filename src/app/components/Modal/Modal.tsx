'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useWindowSize } from '@/hooks/useWindowSize/useWindowSize';

export function Modal({ children }: { children: React.ReactNode }) {
  const width = useWindowSize();
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    document.documentElement.className = 'no-scroll';
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = (open: boolean) => {
    if (!open) {
      if (width > 767) {
        document.documentElement.className = '';
      }
      router.back();
    }
  };

  return (
    <Dialog.Root open onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#73737399] z-20" />
        <Dialog.DialogContent className="fixed left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          {children}
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
