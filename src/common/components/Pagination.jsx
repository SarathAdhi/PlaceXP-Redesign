import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { useRouter } from "next/router";
import { LinkedItem } from "./elements/LinkedItem";

export const Pagination = ({ Component, page, length }) => {
  const router = useRouter();

  if (!page) router.replace("?page=1");
  else if (page > length || page <= 0) router.replace("?page=1");

  return (
    <div className="w-full flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
      <Component />
      <div className="w-full bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <LinkedItem
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </LinkedItem>
          <LinkedItem
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </LinkedItem>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              <span className="font-medium">{page}</span>
              {" - "}
              <span className="font-medium">{length}</span> Questions
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <LinkedItem
                href={page === 1 ? `?page=${page}` : `?page=${page - 1}`}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </LinkedItem>

              <LinkedItem
                href={page >= length ? `?page=${page}` : `?page=${page + 1}`}
                className={clsx(
                  page === length && "cursor-not-allowed",
                  "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                )}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </LinkedItem>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
