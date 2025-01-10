import AWSsa from "../assets/aws-sa-a.png";
import Kuber from "../assets/kuber.png";
import AWScom from "../assets/aws-com.png";
import Terr from "../assets/terraformCert.jpeg";
import AWSser from "../assets/aws-server.png";

function Certifications() {
  return (
    <div className="py-12 px-4 sm:py-14">
      <div className="flex justify-center pb-20">
        <p className={"text-4xl font-bold"} id="certification">
          Certifications
        </p>
      </div>
      <div className="grid grid-cols-2 place-items-center py-6 gap-4 sm:grid-cols-4">
        <img src={AWSsa} alt="AWS-SA Cert" className={"w-64"} />
        <img src={Kuber} alt="Kubernetes Cert" className={"w-64"} />
        <img src={Terr} alt="Terraform Cert" className={"w-auto"} />
        <img src={AWScom} alt="AWS Compute Cert" className={"w-5/6"} />
        <img src={AWSser} alt="AWS Serverless Cert" className={"w-5/6"} />
      </div>
    </div>
  );
}

export default Certifications;
