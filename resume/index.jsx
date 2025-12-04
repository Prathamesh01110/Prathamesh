import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';

export default function Resume() {
  return (
    <Layout
      title="Prathamesh Jakkula"
      description="Serves as Both a Portfolio website & Documentation for starting point"
    >
      <ResumeContent />
    </Layout>
  );
}

// Separate component so hooks work properly
function ResumeContent() {
  const { colorMode } = useColorMode(); // ✅ Now safe

  return (
    <div className="p-5">

      {/* Title + Button Row */}
      <div className="flex justify-between items-center flex-wrap gap-3">
        <h1 className="m-0">Resume</h1>

        <a
          href="/resume.pdf"
          download="Prathamesh-Jakkula-Resume.pdf"
          className="px-5 py-2 bg-blue-600 text-white rounded-md font-bold no-underline text-center whitespace-nowrap"
        >
          Download Resume
        </a>
      </div>

      {/* Special Thanks Section */}
      <div
        className={clsx(
          "mt-10 max-w-full mx-auto p-6 rounded-2xl shadow-lg border transition-all",
          colorMode === "dark"
            ? "bg-white/5 border-white/10 text-slate-200 shadow-white/10"
            : "bg-white border-gray-200 text-gray-700 shadow-gray-200"
        )}
      >
        <h3
          className={clsx(
            "text-xl font-semibold mb-2",
            colorMode === "dark" ? "text-purple-300" : "text-purple-600"
          )}
        >
          Special Thanks
        </h3>

        <p className="leading-relaxed text-sm sm:text-base">
          Special thanks to{" "}
          <a
            href="https://www.linkedin.com/in/romerodsouza/"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "font-semibold underline-offset-2 hover:underline",
              colorMode === "dark" ? "text-blue-300" : "text-blue-600"
            )}
          >
            Romoro Dsouza Sir
          </a>{" "}
          (TPO, SJCEM) for guiding me through multiple resume iterations that achieved
          scores of <span className="font-semibold">100%</span> (resume.io),{" "}
          <span className="font-semibold">96%</span> (resumego),{" "}
          <span className="font-semibold">75%</span> (weekday),{" "}
          <span className="font-semibold">71%</span> (resume-now), and{" "}
          <span className="font-semibold">64%</span> (resumeworded).
        </p>
      </div>

      {/* PDF Preview */}
      <iframe
        src="/resume.pdf"
        width="100%"
        height="800px"
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      ></iframe>
    </div>
  );
}
