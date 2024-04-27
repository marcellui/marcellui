import { useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "marcel's resume ";
  }, []);

  return (
    <div>
      <p>here's my resume</p>
      <hr class="dashed" />

      <iframe
        src="https://docs.google.com/document/d/1_knry2NinCjlhQMCAilmh9vUAbZt4H8Gss2tJs3Q6YI/preview"
        width="640"
        height="825"
        allow="autoplay"
        title="resume"
      ></iframe>

      <a
        href="/marcel-lui_resume.pdf"
        download="marcel-lui_resume.pdf"
        class="clickable"
      >
        download
      </a>
    </div>
  );
}

export default Resume;
