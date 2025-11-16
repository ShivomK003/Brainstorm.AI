import React from "react";

export interface DropDownTextInputProps {
  searchValue?: string;
  setSearchValue?: (value: string) => void;
  setDropDownOpen?: (value: boolean) => void;
  items?: { key: string; value: string; subvalue?: string }[];
  setSelectedItem?: (value: any) => void;
  saveBy?: "key" | "value" | "subvalue" | "item";
  dropDownClassName?: string;
  inputClassName?: string;
  listClassName?: string;
  listItemClassName?: string;
  listItemButtonClassName?: string;
  noResultsTextClassName?: string;
  noResultsText?: string;
  placeholder?: string;
}

function DropDownTextInput({
  searchValue = "",
  setSearchValue = () => {},
  setDropDownOpen = () => {},
  items = [],
  saveBy = "key",
  setSelectedItem = () => {},
  dropDownClassName = "absolute z-50 mt-2 w-72 max-h-64 overflow-auto no-scrollbar rounded-lg border border-white/20 bg-[#2A0B4A] shadow-xl",
  inputClassName = "w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAA600]",
  listClassName = "max-h-52 overflow-y-auto no-scrollbar",
  listItemClassName = "px-3 py-2 text-sm text-white/70 hover:bg-white/10",
  listItemButtonClassName = "w-full text-left px-3 py-2 text-white flex items-center justify-between",
  noResultsTextClassName = "px-3 py-2 text-sm text-white/70",
  noResultsText = "No results",
  placeholder = "Search country or code",
}: DropDownTextInputProps = {}) {
  return (
    <div className={dropDownClassName}>
      <div className="p-2 border-b border-white/10">
        <input
          autoFocus
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={placeholder}
          className={inputClassName}
        />
      </div>
      <ul className={listClassName}>
        {items
          .filter((item) => {
            const q = searchValue.toLowerCase();
            return item.value.toLowerCase().includes(q) || item.key.toLowerCase().includes(q);
          })
          .map((item) => (
            <li key={item.key} className={listItemClassName}>
              <button
                type="button"
                onClick={() => {
                  setDropDownOpen(false);
                  setSearchValue("");
                  setSelectedItem(saveBy === "item" ? (item as any) : item[saveBy] ?? "");
                }}
                className={listItemButtonClassName}>
                <span className="text-sm">{item.value}</span>
                <span className="text-sm opacity-80">{item.subvalue}</span>
              </button>
            </li>
          ))}
        {items.filter((item) => {
          const q = searchValue.toLowerCase();
          return item.value.toLowerCase().includes(q) || item.key.toLowerCase().includes(q);
        }).length === 0 && <li className={noResultsTextClassName}>{noResultsText}</li>}
      </ul>
    </div>
  );
}

export default DropDownTextInput;
