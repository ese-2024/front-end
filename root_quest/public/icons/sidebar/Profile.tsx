import React from "react";

interface ProfileI {
    fill?: string;
}

export default function Profile({ fill = "#fff" }: ProfileI) {
    return (
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={fill} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>    )
}