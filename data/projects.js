/* One object per project. Reorder the list to reorder the grid.
   visible:false hides a project without deleting it. status:"in-progress" adds a badge.
   github/demo: leave "" to hide the link. Text in [brackets] is a placeholder. */
window.PROJECTS = [
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
 
   { visible:true, status:"", title:"Research Copilot Lite", thumb:"assets/images/projects/research-copilot.png", alt:"Placeholder thumbnail for Research Copilot Lite",
   summary:"A lightweight research assistant that answers questions over uploaded documents using retrieval-augmented generation, Gemini embeddings and a FAISS index, served through Streamlit.",
   tags:["RAG","Gemini embeddings","FAISS","Streamlit","Document processing"], github:"https://github.com/GauriR011/Research_Assistant", demo:"",
   problem:"[Describe the problem]", objective:"[Describe the goal]",
   approach:"Documents are processed and embedded with Gemini embeddings, indexed in FAISS and queried through a Streamlit interface.", results:"[Add outcome]" },
 
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
 
   { visible:true, status:"", title:"American Sign Language Recognition", thumb:"assets/images/projects/asl.png", alt:"Placeholder thumbnail for American Sign Language Recognition",
   summary:"Hybrid deep learning models that recognise American Sign Language from short videos, using MediaPipe Holistic to track hand and pose movement.",
   tags:["Deep Learning","Computer Vision","MediaPipe","ResNet50","Xception","BiLSTM"], github:"https://github.com/GauriR011/Financial-Risk-for-Loan-Approval", demo:"https://link.springer.com/chapter/10.1007/978-981-96-1758-6_31", demoLabel:"Publication",
   problem:"Recognising signed gestures from video requires modelling both appearance and movement over time.",
   objective:"Classify American Sign Language from short videos using hybrid deep learning models.",
   approach:"ResNet50 and Xception extract frame features, a BiLSTM models the sequence, and MediaPipe Holistic captures the signer's hand and pose movement.",
   results:"The ResNet50 + BiLSTM model performed best, reaching 75% accuracy. Published as a Springer proceedings chapter." },

 /* Hidden projects from your resumes. Set visible:true to show (swap with one above to keep six). */
 
 { visible:true, status:"", title:"Financial Risk for Loan Application", thumb:"assets/images/projects/financial-risk.png", alt:"Placeholder thumbnail for Financial Risk for Loan Application",
   summary:"Logistic Regression, Random Forest and XGBoost models predicting loan approval while balancing profitability and default risk.",
   tags:["Python","XGBoost","Random Forest","Feature engineering"], github:"", demo:"",
   problem:"Lenders must balance profitability against default risk.", objective:"Predict loan approval outcomes.",
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
  problem: `ReMind is an innovative mobile application designed specifically for individuals with <strong>Alzheimer's disease</strong> and their caregivers.

The app assists users in managing daily tasks, medications, and routines through an intuitive and user-friendly interface. ReMind offers a <strong>personalized chatbot</strong>, powered by the <strong>Gemini API</strong>, that engages users in daily conversations to track their activities and well-being. These interactions generate insightful reports that are automatically logged into a <strong>memory journal</strong>, accessible by healthcare professionals to monitor the patient's condition over time.

In addition to its daily management tools, ReMind includes <strong>interactive games</strong> tailored to improve memory and cognitive skills. Users can enjoy a tile-matching game to enhance visual memory and a multiple-choice quiz that challenges recollection abilities. The app also prioritizes safety with an <strong>SOS feature</strong>, offering quick access to emergency contacts, location-based directions home, and a direct line to the police if needed.

<strong>Target Audience:</strong>
ReMind is tailored for individuals with Alzheimer's disease, providing them with essential support to maintain their independence and well-being. It is also a valuable tool for caregivers and healthcare professionals, offering insights into the patient's daily routine and cognitive progress.`
}

];

