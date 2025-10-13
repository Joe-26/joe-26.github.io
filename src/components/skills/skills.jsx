import React from 'react'

function skills() {
  return (
    <div>
      {/* Skills */}
      <div className="mt-10 font-mono uppercase font-extrabold mb-5 text-lg sm:text-2xl">Skills</div>
      <div className="flex flex-col font-extralight sm:flex-row sm:gap-5">
        <div className="flex font-mono sm:basis-1/4">
          <h2 className="font-extralight">Languages</h2>
        </div>
        <div className="sm:flex sm:flex-col sm:basis-3/4">
          <div className="basis-1/2">Python, Java, JavaScript, Typescript, HTML,CSS, SQL, Shell</div>
        </div>
      </div>
      <div className="flex flex-col mt-4 font-extralight sm:flex-row sm:gap-5">
        <div className="flex font-mono sm:basis-1/4">
          <h2 className="font-extralight">AI/ML Tools</h2>
        </div>
        <div className="sm:flex sm:flex-col sm:basis-3/4">
          <div className="basis-1/2">LLMs, LangChain, Bedrock, SageMaker, PyTorch, Hugging Face, Scikit-learn, VADER NLP, RAG</div>
        </div>
      </div>
      <div className="flex flex-col mt-4 font-extralight sm:flex-row sm:gap-5">
        <div className="flex font-mono sm:basis-1/4">
          <h2 className="font-extralight">Frameworks/Libraries</h2>
        </div>
        <div className="sm:flex sm:flex-col sm:basis-3/4">
          <div className="basis-1/2">React, Vue.js, FastAPI, Django, Spring Boot, REST APIs, WCAG 2.1, ADA, Tailwind</div>
        </div>
      </div>
      <div className="flex flex-col mt-4 font-extralight sm:flex-row sm:gap-5">
        <div className="flex font-mono sm:basis-1/4">
          <h2 className="font-extralight">Cloud Platforms</h2>
        </div>
        <div className="sm:flex sm:flex-col sm:basis-3/4">
          <div className="basis-1/2">AWS (EC2, Lambda, VPC, S3, ECS, EKS, ECR, CloudWatch, IAM, SQS, SNS), Boto3, Azure</div>
        </div>
      </div>
      <div className="flex flex-col mt-4 font-extralight sm:flex-row sm:gap-5">
        <div className="flex font-mono sm:basis-1/4">
          <h2 className="font-extralight">Databases</h2>
        </div>
        <div className="sm:flex sm:flex-col sm:basis-3/4">
          <div className="basis-1/2">DynamoDB, AWS RDS, Redis, MongoDB, PostgreSQL, MySQL, Oracle, SQL Server, Pinecone</div>
        </div>
      </div>
      <div className="flex flex-col mt-4 font-extralight sm:flex-row sm:gap-5">
        <div className="flex font-mono sm:basis-1/4">
          <h2 className="font-extralight">DevOps & Tools</h2>
        </div>
        <div className="sm:flex sm:flex-col sm:basis-3/4">
          <div className="basis-1/2">
            Terraform, CloudFormation, Docker, Kubernetes, Git, GitHub, 
            Bitbucket, GitHub Actions, Jenkins,AWS CodePipeline, CodeBuild, 
            Selenium, Postman, Jira, Confluence, Azure DevOps
            </div>
        </div>
      </div>
    </div>
  )
}

export default skills