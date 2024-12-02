import type { FC } from "react";

import Link from "next/link";

import { Button, Input } from "@/components/index";

import styles from "@/components/auth/SingInForm/SignInForm.module.scss";

interface SignInFormRememberProps {
  remember: boolean;
  handleCheckedRemember: () => void;
}

export const SignInFormRemember: FC<SignInFormRememberProps> = ({
  remember,
  handleCheckedRemember,
}) => {
  return (
    <div className={styles["signInFormBlockRemember"]}>
      <Input
        htmlFor="remember"
        type="checkbox"
        label="Remember me"
        id="remember"
        value=""
        checked={remember}
        onChange={handleCheckedRemember}
        name="remember"
        classNames={{
          input: styles["signInFormBlockRememberCheckbox"],
          container: styles["signInFormBlockRememberContainer"],
          label: styles["signInFormBlockRememberLabel"],
        }}
      />

      <Button type="button" className={styles["signInFormBlockForgotButton"]}>
        <Link href={""}>Forgot Password?</Link>
      </Button>
    </div>
  );
};
