"use client"
import { useRouter } from "next/navigation";
import { useLoginModalStore } from '@/store/LoginModalStore';
import useUserStore from "@/store/UserStore";
import { LOGIN_CONTROLLS } from '@/components/Header/constans'
import Link from "next/link";


export function ProtectedLink({ children, href }) {
  const router = useRouter();
  const openModal = useLoginModalStore((state) => state.openModal);
  const setRedirectPath = useLoginModalStore((state) => state.setRedirectPath);
  const { token } = useUserStore();

  const handleClick = (e) => {
    if (!token) {
      e.preventDefault();
      setRedirectPath(href); // <-- Передаём путь, на который должны перейти после логина
      openModal(LOGIN_CONTROLLS);
    } else {
      router.push(href);
  }
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
