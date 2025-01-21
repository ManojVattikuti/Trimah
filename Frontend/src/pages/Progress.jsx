import { Link } from "react-router-dom";


const PageInProgress = () => {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="animate-bounce">
          {/* Loader Pinwheel Icon */}
          <svg
            className="mx-auto h-12 w-12 text-primary animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.416 8.342A9 9 0 016.958 4.724M7.59 15.842a9 9 0 0010.332 1.416"
            />
          </svg>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-pulse">
          Page in Progress
        </h1>
        <p className="mt-4 text-muted-foreground animate-fadeIn">
          We're working hard to bring you the latest updates. Please check back
          soon.
        </p>
        <div className="mt-6 animate-fadeIn">
          {/* Go to Homepage Link */}
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md shadow-sm transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageInProgress;
