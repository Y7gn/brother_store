import React from "react";
import Navbar from "../components/Navbar.js";

const AboutMe = () => {
  return (
    <div className="AboutMainPage">
      <Navbar />
      <section className="AboutPage">
        <div className="AboutDiv">
          <h1 className="aboutHeader">نبذة عنا</h1>
          <h1 className="aboutSubHeader">
            نقدم خدمات بيع يوزرات و خدمات تصميم المواقع
          </h1>
        </div>

        <p className="aboutParagraph">
          <p>
            مالك متجر متخصص في بيع حسابات التواصل الاجتماعي. يقدم المتجر حسابات
            متنوعة عبر مختلف<br></br> البرامج الاجتماعية، مثل انستقرام، تويتر،
            سناب شات وغيرها، لتلبية احتياجات العملاء المختلفة.
          </p>
          <p>
            بالإضافة إلى ذلك، يقدم المتجر خدمات برمجة المواقع الشخصية والتجارية.
            يتميز العمل بتطوير مواقع ويب احترافية ومتطورة <br></br>باستخدام أحدث
            التقنيات ولغات البرمجة المناسبة. تهتم بتحسين تجربة المستخدم وتوفير
            واجهات سهلة الاستخدام ومتجاوبة مع مختلف الأجهزة.
          </p>
        </p>
        <img src={require("../assets/logo.png")} alt="logo" width={600} />
      </section>
    </div>
  );
};

export default AboutMe;
