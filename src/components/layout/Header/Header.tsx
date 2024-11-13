"use client";

import { ChangeEvent, useState, type FC } from "react";

import Image from "next/image";

import { Button, Input } from "@/components/index";

import { Value } from "@/types/input";

import {
  header,
  headerContainer,
  searchContainer,
  searchInput,
  searchLabel,
  notification,
} from "@/classNames/header/headerClassNames";

export const Header: FC = () => {
  const [inputValue, setInputValue] = useState<Value>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <header className={header}>
      <div className={headerContainer}>
        <Input
          icon="/icons/outlined-icons/search.svg"
          onChange={handleInputChange}
          value={inputValue}
          htmlFor="search"
          label=""
          id="search"
          type="search"
          name="search"
          placeholder="Search"
          classNames={{
            input: searchInput,
            container: searchContainer,
            label: searchLabel,
          }}
        />
        <Button type="button" className={notification}>
          <Image
            src="/icons/outlined-icons/notification.svg"
            alt="Notification Icon"
            width={24}
            height={24}
          />
        </Button>
      </div>
    </header>
  );
};
