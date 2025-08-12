export const projectsData = [
  {
    id: 1,
    name: 'Fashion Inventory Demand Forecasting',
    description: "Developed a classification model to predict which products would remain unsold using Python and Random Forest. Applied KMeans clustering to group stores based on discount, pricing, and demand. Used feature importance to identify key drivers of sales performance and optimize seasonal planning.",
    tools: ['Python', 'Random Forest', 'KMeans', 'Scikit-learn', 'Seaborn'],
    role: 'Machine Learning Developer',
    code: 'https://github.com/krinapatel08/fashion-inventory-ml',
    demo: '',
  },
  {
    id: 2,
    name: 'Customer Churn Prediction with MLflow',
    description: "Built an end-to-end ML pipeline to predict churn for a telecom company using Logistic Regression. Used MLflow for model tracking, logging metrics, and saving artifacts. Achieved 80% accuracy and exported the final model for deployment.",
    tools: ['Python', 'Logistic Regression', 'Scikit-learn', 'MLflow'],
    role: 'Machine Learning Engineer',
    code: 'https://github.com/krinapatel08/churn-prediction',
    demo: '',
  },
  {
    id: 3,
    name: 'Energy Consumption Forecasting with Explainability',
    description: "Built a time-based regression model using hourly power consumption data. Used XGBoost and lag-based features to forecast next-hour usage. Explained model predictions using SHAP values to ensure transparency in energy forecasting.",
    tools: ['Python', 'XGBoost', 'SHAP', 'Time Series Forecasting'],
    role: 'Data Scientist',
    code: 'https://github.com/krinapatel08/energy-forecasting',
    demo: '',
  },
  {
    id: 4,
    name: 'Quiz Web App',
    description: "Developed an interactive quiz web app using Flask for the backend and Vue.js for the frontend. Implemented background job processing with Celery and Redis for handling time-intensive operations like quiz scoring and report generation.",
    tools: ['Flask', 'Vue.js', 'Celery', 'Redis', 'JavaScript', 'Python'],
    role: 'Full Stack Developer',
    code: 'https://github.com/krinapatel08/quiz_master_22f3001669',
    demo: '',
  }
];
