import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    
    // Replace or add language code in the URL
    if (pathParts[1] === '') {
      window.location.href = `/${value}`;
    } else {
      pathParts[1] = value;
      window.location.href = pathParts.join('/');
    }
    
    i18n.changeLanguage(value);
  };

  return (
    <Select onValueChange={changeLanguage} defaultValue={i18n.language}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="zh">中文</SelectItem>
      </SelectContent>
    </Select>
  );
}
