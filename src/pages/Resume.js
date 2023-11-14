import { useState, useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "marcel's resume ";
  }, []);

  return (
    <div>
      <p>here's my resume</p>
      <hr class="dashed" />

      <iframe
        src="https://drive.google.com/file/d/1WvkqD-Iol6CDmCCMGlvcbp5JNWSsRAJa/preview"
        width="640"
        height="825"
        allow="autoplay"
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
