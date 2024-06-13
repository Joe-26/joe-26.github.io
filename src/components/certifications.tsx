import AWSsa from "../assets/aws-sa-a.png";
import Kuber from "../assets/kuber.png";
import AWScom from "../assets/aws-com.png";
import Terr from "../assets/terraformCert.jpeg";

function Certifications() {
  return (
    <div className={"flex flex-col py-16 px-16 bg-yellow"}>
      <div className="flex justify-center py-6">
        <p className={"text-7xl"} id="certification">
          CERTIFICATIONS
        </p>
      </div>
      <div className="grid grid-cols-4 place-items-center py-6 gap-4">
        <img src={AWSsa} alt="AWS-SA Cert" className={"w-64"} />
        <img src={Kuber} alt="Kubernetes Cert" className={"w-64"} />
        <img src={Terr} alt="Terraform Cert" className={"w-auto"} />
        <img src={AWScom} alt="AWS Compute Cert" className={"w-5/6"} />
      </div>
    </div>
  );
}

export default Certifications;
