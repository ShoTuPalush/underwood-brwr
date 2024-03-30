'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export default function ContactModal() {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    document.documentElement.className = 'no-scroll';
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    document.documentElement.className = '';
    router.back();
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
        <div>asd</div>
        <button onClick={onDismiss} className="close-button" />
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}
