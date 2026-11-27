/* Edit this file to update everything except projects (see data/projects.js).
   Text in [square brackets] is a placeholder and is shown in italics until replaced. */
window.SITE = {
  name: "Gauri Revankar",
  headline: "Data Science | Data Analytics | Artificial Intelligence",
  location: "Dubai, United Arab Emirates", // change if you prefer another location
  bio: "Master's graduate in Data Science from the University of Texas at Austin, with a BSc in Computer Science (Data Science) from Heriot-Watt University Dubai. I work across analytics and machine learning, from analysing sales and customer-feedback data to building predictive models, NLP solutions and AI-powered applications in Python and SQL. My projects include a multi-agent news reporting system, retrieval-augmented generation tools and a published deep learning study on sign language recognition. I like turning messy, real-world problems into practical tools and explaining the findings clearly to technical and non-technical teams.",
  photo: "assets/images/profile-placeholder.svg", // replace with e.g. assets/images/profile.jpg
  photoAlt: "Portrait of Gauri Revankar",
  email: "revankarg06@gmail.com",
  linkedin: "https://www.linkedin.com/in/gauri-revankar",
  github: "https://github.com/GauriR011",
  resume: "assets/resume/Gauri_Revankar_Resume.pdf", // add your PDF with this exact name
  lenses: [
    { title: "Data science & AI", text: "Statistics, machine learning and deep learning applied to predictive models, neural networks, NLP and AI-powered applications, using Python, PyTorch, TensorFlow and agentic AI frameworks.", tags: ["Python", "PyTorch", "TensorFlow", "NLP", "RAG", "Agentic AI"] },
    { title: "Analytics & insight", text: "Analysis of sales, product and customer-feedback data to find trends, define performance metrics and build dashboards that support business decisions.", tags: ["SQL", "Excel", "Power BI", "Tableau", "Streamlit", "A/B Testing"] }
  ],
  experience: [
    { company: "Apparel Group", title: "Data Analyst Intern", place: "Dubai, UAE", dates: "Jul 2024 – Sep 2024",
      bullets: [
        "Analysed two years of product and sales data with SQL and Excel to identify seasonal trends across colour, material and subcategory, and developed performance metrics to support commercial insight.",
        "Applied NLP topic modelling (Top2Vec, BERTopic) to customer feedback to surface recurring concerns, and presented the findings in an interactive Streamlit dashboard.",
        "Cleaned and processed large datasets using SQL and Python.",
        "Supported functionality testing for product listing page (PLP) boosting and new applications by writing test cases and giving feedback."],
      tags: ["SQL", "Excel", "Python", "BERTopic", "Top2Vec", "Streamlit"] },
    { company: "Reckitt", title: "Mobile Application Development Intern", place: "Dubai, UAE", dates: "Jul 2023 – Sep 2023",
      bullets: [
        "Built a Power Apps mobile application that summarises product audit data, including Share of Shelf and On-Shelf Availability, for sales and marketing teams.",
        "Gathered requirements and iterated on the application through recurring meetings with stakeholders and end users.",
        "Automated data collection and reporting with Power Automate, Azure Storage and SharePoint.",
        "Cleaned and formatted raw audit data using Python."],
      tags: ["Power Apps", "Power Automate", "Azure Storage", "SharePoint", "Python"] },
    { company: "Al Yousuf L.L.C", title: "Data Analyst Intern", place: "Dubai, UAE", dates: "Jun 2023",
      bullets: [
        "Analysed five years of sales and purchase history to support inventory management and supply chain efficiency.",
        "Built machine learning models in Python for demand forecasting and next-year sales prediction.",
        "Developed a Dash and Plotly dashboard to present the findings."],
      tags: ["Python", "Machine Learning", "Dash", "Plotly"] }
  ],
  education: [
    { school: "The University of Texas at Austin", degree: "Master of Science in Data Science", dates: "Jan 2025 – May 2026", notes: ["GPA: 3.93 / 4", "[Add relevant coursework, thesis or awards]"] },
    { school: "Heriot-Watt University, Dubai", degree: "BSc Computer Science (Data Science), First Class Honours", dates: "Sep 2021 – Jul 2024", notes: ["[Add dissertation, scholarships or awards]"] }
  ],
  skills: [
    { group: "Programming languages", items: ["Python", "SQL", "Java", "R", "DAX"] },
    { group: "Machine learning & AI", items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Predictive Modelling", "Deep Learning", "NLP", "Generative AI", "LLM APIs", "RAG", "Agentic AI", "LangChain", "Prompt Engineering"] },
    { group: "Statistics", items: ["Hypothesis Testing", "A/B Testing", "Confidence Intervals", "Statistical Analysis", "Model Evaluation"] },
    { group: "Analytics & visualisation", items: ["Power BI", "Tableau", "Excel", "Plotly", "Dash", "Streamlit", "Pandas", "NumPy"] },
    { group: "Frameworks & development", items: ["FastAPI", "Flutter", "Docker", "Postman", "REST APIs"] },
    { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Vector Databases"] },
    { group: "Automation & cloud", items: ["Power Automate", "Power Apps", "Azure Storage", "SharePoint", "ETL/ELT", "Workflow Automation"] }
  ],
  recognition: [
    { title: "American Sign Language Recognition using Deep Learning Models", kind: "Publication", venue: "ICITA 2024 [confirm proceedings title]", date: "[Add date]", link: "https://link.springer.com/chapter/10.1007/978-981-96-1758-6_31", linkLabel: "View publication",
      text: "Hybrid ResNet50, Xception and BiLSTM models for classifying American Sign Language from short videos, with MediaPipe Holistic tracking hand and pose movement." },
    { title: "Women in Data Science UAE 2026", kind: "Speaking engagement", venue: "[Add talk title]", date: "[Add date]", link: "", linkLabel: "", text: "[Add one line about your talk]" }
  ],
  contactMessage: "Interested in collaborating or discussing opportunities in Data Science, Analytics and AI? Feel free to get in touch."
};
