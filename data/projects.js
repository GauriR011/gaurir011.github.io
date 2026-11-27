/* One object per project. Reorder the list to reorder the grid.
   visible:false hides a project without deleting it. status:"in-progress" adds a badge.
   github/demo: leave "" to hide the link. Text in [brackets] is a placeholder. */
window.PROJECTS = [

  { visible:true, status:"", title:"Financial Risk for Loan Application", thumb:"assets/images/projects/financial-risk.png", alt:"Placeholder thumbnail for Financial Risk for Loan Application",
   summary:"Logistic Regression, Random Forest and XGBoost models predicting loan approval while balancing profitability and default risk.",
   tags:["Python", "EDA" ,"Feature engineering", "Model Training", "Classification", "Model Testing and Evaluation"], github:"https://github.com/GauriR011/Financial-Risk-for-Loan-Approval", demo:"",
   problem:"A financial institution wants to grow its loan portfolio by approving more applications without significantly increasing its default risk. Historically, overly cautious approval strategies have led to lost revenue opportunities, while lenient strategies have increased default rates and write-offs.", objective:"Use predictive modeling to identify applicants who are both likely to repay their loans and profitable to approve, balancing approval rates with financial risk and expected returns.",
   approach:"Data cleaning, feature engineering, scaling, encoding and class balancing, with correlation analysis of risk drivers such as credit score, net worth and debt-to-income ratio. Models were evaluated with precision, recall, F1, confusion matrices and ROC-AUC / PR-AUC curves.",
   results:"XGBoost performed best, reaching a 97% F1-score." },

   {
    visible: true,
    status: "",
    title: "AlzBot: Web Application for Alzheimer's Patients",
    thumb: "assets/images/projects/remind.png",
    alt: "Placeholder thumbnail for AlzBot",
    summary: "A conversational AI web application supporting Alzheimer's patients with daily interactions and well-being tracking, built on the Gemini API.",
    tags: ["Gemini API", "RAG", "Chatbot"],
    github: "https://github.com/GauriR011/Alz_chatbot",
    demo: "",
    problem: `Developed a web-based conversational AI application to support Alzheimer’s patients through daily interactions and well-being tracking.

Built a personalized conversational chatbot using the Gemini API to engage users in daily interactions and to generate structured journal entries from patient conversations. Designed automated reporting that converts chatbot interactions into structured insights.

Implemented a RAG-based system enabling healthcare professionals to query patient history and analyse long-term cognitive and behavioural trends.
`
    },

   { visible:true, status:"", title:"Research Copilot Lite", thumb:"assets/images/projects/research-copilot.png", alt:"Placeholder thumbnail for Research Copilot Lite",
   summary:"A research assistant that answers questions over uploaded research papers or documents using retrieval-augmented generation (RAG), Gemini embeddings and a FAISS index, served through Streamlit.",
   tags:["RAG","Gemini embeddings","FAISS","Streamlit","Document processing"], github:"https://github.com/GauriR011/Research_Assistant", demo:"",
   problem:"Reviewing and synthesizing research papers for thesis writing is a time-consuming and mentally demanding process. Having gone through this experience myself, I decided to build a RAG-powered assistant that allows users to upload research papers and interact with them conversationally.",},
 

   { visible:true, status:"", title:"American Sign Language Recognition", thumb:"assets/images/projects/asl.png", alt:"Placeholder thumbnail for American Sign Language Recognition",
   summary:"Hybrid deep learning models that recognise American Sign Language from short videos, using MediaPipe Holistic to track hand and pose movement.",
   tags:["Deep Learning","Computer Vision","MediaPipe","ResNet50","Xception","BiLSTM"], github:"https://github.com/GauriR011/Financial-Risk-for-Loan-Approval", demo:"https://link.springer.com/chapter/10.1007/978-981-96-1758-6_31", demoLabel:"Publication",
   problem:`Sign language is a mode of communication that enables individuals with hearing or speech impairment, or both, to express themselves. Sign Language Recognition from videos has become a new challenge in this research field. This paper focuses on Isolated Sign Language Recognition, which involves recognizing and interpreting phrases or words expressed through gestures and hand movements through a short video.

With the advancement of convolutional and recurrent neural network architectures in Computer Vision, this paper proposes efficient deep learning models to recognize American Sign Language (ASL). The models implemented in this paper are ResNet50, ResNet50 + BiLSTM, Xception, and Xception + BiLSTM. Overall, ResNet50 + BiLSTM peformed the best. The models were trained and evaluated on a 10-gloss subset of the WLASL dataset. Furthermore, a compartive analysis was performed with the models proposed in other research papers implemented for the same purpose.`,
   objective:"Classify American Sign Language from short videos using hybrid deep learning models.",
   approach:"ResNet50 and Xception extract frame features, a BiLSTM models the sequence, and MediaPipe Holistic captures the signer's hand and pose movement.",
   results:"The ResNet50 + BiLSTM model performed best, reaching 75% accuracy. Published as a Springer proceedings chapter." },

  

  { visible:true, status:"", title:"Netflix Engagement Reports", thumb:"assets/images/projects/netflix.png", alt:"Placeholder thumbnail for Netflix Engagement Reports",
   summary:"Logistic Regression, Random Forest and XGBoost models predicting loan approval while balancing profitability and default risk.",
   tags:["R","Data analysis ","Data visualization","Metrics", "Feature engineering"], github:"https://github.com/GauriR011/Netflix-Engagement-Reports", demo:"",
   problem:"This R project analyzes Netflix movie viewing data from Netflix’s Engagement Reports covering the period from July 2023 to June 2025.",
   approach:`The project focuses on two main questions:

1. Do Netflix movies form distinct performance segments?

Specifically, can movies be grouped into meaningful segments based on:

Overall viewership/engagement
Movie runtime
Viewing efficiency, or views relative to movie length

2. Does global availability affect movie performance?

After creating the performance segments, we investigate whether movies that are globally available are more likely to belong to higher-performing segments than movies that are not globally available.`,},


 /* Hidden projects from your resumes. Set visible:true to show (swap with one above to keep six). */
 
    { visible:false, status:"", title:"E-commerce Customer Behaviour Analysis", thumb:"assets/images/projects/ecommerce.svg", alt:"Placeholder thumbnail for the E-commerce Customer Behaviour Analysis",
   summary:"Exploratory analysis of customer behaviour in e-commerce data using Python, SQL and Pandas.",
   tags:["Python","SQL","Pandas","EDA","Customer analytics"], github:"", demo:"",
   problem:"[Describe the business question]", objective:"[Describe the goal]",
   approach:"Data was queried with SQL and explored in Python with Pandas.", results:"[Add key findings]" },
 
   { visible:false, status:"", title:"Customer Feedback Topic Modelling", thumb:"assets/images/projects/topic-modelling.svg", alt:"Placeholder thumbnail for Customer Feedback Topic Modelling",
   summary:"NLP topic modelling of customer feedback with BERTopic and Top2Vec to surface recurring concerns, presented in an interactive Streamlit dashboard.",
   tags:["NLP","BERTopic","Top2Vec","SQL","Streamlit"], github:"", demo:"",
   problem:"Large volumes of free-text customer feedback are hard to read manually.",
   objective:"Identify recurring customer concerns and opportunities to improve customer experience.",
   approach:"Feedback was cleaned with SQL and Python, modelled with Top2Vec and BERTopic, and presented in a Streamlit dashboard.",
   results:"[Add outcome you are comfortable sharing publicly]" },
 
  { visible:false, status:"", title:"Stock Market News Report Generator", thumb:"assets/images/projects/stock-news.svg", alt:"Placeholder thumbnail for the Stock Market News Report Generator",
   summary:"A multi-agent system built with CrewAI that generates personalised stock market news reports from a user's portfolio holdings, then delivers them by email.",
   tags:["CrewAI","Multi-agent AI","Automation","Web scraping"], github:"", demo:"",
   problem:"Keeping up with news relevant to a specific portfolio is slow and manual.",
   objective:"Automate the research, writing and delivery of a personalised stock news report.",
   approach:"A four-agent workflow covering web scraping, content writing, fact-checking and report generation retrieves, summarises and validates financial news, then produces a structured newsletter with headlines and article summaries that is sent by email.",
   results:"[Add outcome, e.g. what the finished newsletter contains or how it was tested]" },
 
   { visible:false, status:"", title:"ReMind: AI-powered Caregiver Application", thumb:"assets/images/projects/remind.svg", alt:"Placeholder thumbnail for ReMind",
   summary:"A caregiver-support application using generative AI and retrieval-augmented generation with Gemini, built with Flutter and a Firebase / MongoDB backend.",
   tags:["Generative AI","Gemini","RAG","Flutter","Firebase","MongoDB"], github:"", demo:"",
   problem:"[Describe the problem caregivers face]", objective:"[Describe the goal of the app]",
   approach:"[Describe how Gemini, retrieval-augmented generation and the Flutter app fit together]", results:"[Add outcome, or mark as in progress]" },
 

];

