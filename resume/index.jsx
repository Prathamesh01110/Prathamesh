import Layout from '@theme/Layout';

export default function Resume() {
  return (
    <Layout
      title="Prathamesh Jakkula"
      description="Serves as Both a Portfolio website & Documentation for starting point"
    >
      <div style={{ padding: "20px" }}>

        {/* Title + Button Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",         
            gap: "10px",            
          }}
        >
          <h1 style={{ margin: 0 }}>Resume</h1>

          <a
            href="/resume.pdf"
            download="Prathamesh-Jakkula-Resume.pdf"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
              textAlign: "center",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Download Resume
          </a>
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
    </Layout>
  );
}
