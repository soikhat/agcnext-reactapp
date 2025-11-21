import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";
export interface rechercheType {
    placeholder: string;
    title: string;
    buttonText: string;
    icon: React.ReactNode;
    onSearch?: (query: string) => void;
}