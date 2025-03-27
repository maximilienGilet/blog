import Fuse from "fuse.js";
import { useEffect, useRef, useState, useMemo } from "react";
import Card from "@components/Card";
import type { CollectionEntry } from "astro:content";

export type SearchItem = {
  title: string;
  description: string;
  data: CollectionEntry<"blog">["data"];
  slug: string;
  type: "post" | "project";
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

export default function SearchBar({ searchList }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
    null
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = useMemo(
    () =>
      new Fuse(searchList, {
        keys: ["title", "description"],
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.5,
      }),
    [searchList]
  );

  useEffect(() => {
    // if URL has search query,
    // insert that search query in input field
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    // put focus cursor at the end of the string
    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    // Add search result only if
    // input value is more than one character
    let inputResult = inputVal.length > 1 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    // Update search string in URL
    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.replaceState(history.state, "", newRelativePathQuery);
    } else {
      history.replaceState(history.state, "", window.location.pathname);
    }
  }, [inputVal]);

  return (
    <>
      <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-75">
          <svg
            className="scale-125 sm:scale-100"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1128_11711)">
              <path d="M25.2301 19.81H23.7001V22.86H20.6601V24.38H17.6101V25.9H22.1801V27.43H23.7001V28.95H25.2301V30.48H26.7501V32H28.2801V30.48H29.8001V28.95H31.3201V27.43H32.8501V25.9H31.3201V24.38H29.8001V22.86H28.2801V21.33H26.7501V16.76H25.2301V19.81Z"></path>
              <path d="M28.2801 10.67H26.7501V16.76H28.2801V10.67Z"></path>
              <path d="M26.7501 7.62H25.2301V10.67H26.7501V7.62Z"></path>
              <path d="M25.2301 4.57001H23.7001V7.62001H25.2301V4.57001Z"></path>
              <path d="M23.7001 12.19H22.1801V15.24H23.7001V12.19Z"></path>
              <path d="M22.1802 9.14H20.6602V12.19H22.1802V9.14Z"></path>
              <path d="M23.7002 3.05H20.6602V4.57H23.7002V3.05Z"></path>
              <path d="M20.6601 7.62H17.6101V9.14H20.6601V7.62Z"></path>
              <path d="M20.6601 1.52H17.6101V3.05H20.6601V1.52Z"></path>
              <path d="M17.6101 6.10001H14.5601V7.62001H17.6101V6.10001Z"></path>
              <path d="M17.6101 25.9H11.5101V27.43H17.6101V25.9Z"></path>
              <path d="M17.6101 0H11.5101V1.52H17.6101V0Z"></path>
              <path d="M11.5101 24.38H8.47009V25.9H11.5101V24.38Z"></path>
              <path d="M11.5101 1.52H8.47009V3.05H11.5101V1.52Z"></path>
              <path d="M8.47004 22.86H5.42004V24.38H8.47004V22.86Z"></path>
              <path d="M8.47004 3.05H5.42004V4.57H8.47004V3.05Z"></path>
              <path d="M5.42015 19.81H3.90015V22.86H5.42015V19.81Z"></path>
              <path d="M5.42015 4.57001H3.90015V7.62001H5.42015V4.57001Z"></path>
              <path d="M3.90012 16.76H2.37012V19.81H3.90012V16.76Z"></path>
              <path d="M3.90012 7.62H2.37012V10.67H3.90012V7.62Z"></path>
              <path d="M2.3701 10.67H0.850098V16.76H2.3701V10.67Z"></path>
            </g>
            <defs>
              <clipPath id="clip0_1128_11711">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0.850098)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
          <span className="sr-only">Rechercher</span>
        </span>
        <input
          className="input w-full
        pl-10 pr-3 placeholder:italic 
        placeholder:text-opacity-75"
          placeholder="Rechercher..."
          type="text"
          name="search"
          value={inputVal}
          onChange={handleChange}
          autoComplete="off"
          // autoFocus
          ref={inputRef}
        />
      </label>

      {inputVal.length > 1 && (
        <div className="mt-8">
          {searchResults?.length}
          {searchResults?.length && searchResults?.length === 1
            ? " résultat "
            : " résultats "}
          pour '{inputVal}'
        </div>
      )}

      <ul>
        {searchResults &&
          searchResults.map(({ item, refIndex }) => (
            <Card
              href={
                item.type === "post"
                  ? `/posts/${item.slug}/`
                  : `/projets/${item.slug}/`
              }
              frontmatter={item.data}
              key={`${refIndex}-${item.slug}`}
              type={item.type}
            />
          ))}
      </ul>
    </>
  );
}
