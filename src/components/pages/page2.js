import React from "react";
import "./Pages.css";
import Footer from "../Footer";

function Page2() {
  return (
    <div className="container">
      <h1 className="main-header">Is inequality good or bad?</h1>

      <div className="sub-container">
        <p className="body-text">
          It is an undeniable fact that inequality is persistent in society
          today, and it is understood to have stemmed from a myriad of factors.
          Now, the next question to ask would be whether inequality is good or
          bad for society. Functionalist theorists ague that inequality is good
          as it cultivates a meritocratic society, while conflict theorists
          believe that inequality hinders the progress of vulnerable groups and
          maintains a system of those in power, and the powerless{" "}
          <a
            className="tag"
            href="https://www.thoughtco.com/sociology-of-social-inequality-3026287"
          >
            (The Sociology of Social Inequality, 2020).
          </a>
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://i.ytimg.com/vi/Z1XTeeSb6kQ/maxresdefault.jpg"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Inequality is beneificial for society</h3>
        <p className="body-text">
          In a society, jobs differ in terms of their functional importance.
          Consequently, individuals are also classified according to their
          functional importance – the extent to which their job contributes to
          the betterment of society. Understandably so, a job’s functional
          importance is determined by the degree to which it is unique and
          require skill{" "}
          <a
            className="tag"
            href="https://courses.lumenlearning.com/boundless-sociology/chapter/sociological-theories-and-global-inequality/"
          >
            (lumenlearning, 2020).
          </a>{" "}
          This narrow scope of skillset required for a job means that only a few
          out of many can effectively live up to the requirements of the job’s
          function. Hence, in order to ensure that job positions are filled by
          the most qualified people, it is logical that society must offer
          greater rewards to institutionalise a stable system in the workforce.
          Unfortunately, inequality arises as a by-product of this. Where the
          most qualified are rewarded for their merits, this system creates
          differences in power and wealth which marginalizes another proportion
          of society.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://img.hani.co.kr/imgdb/resize/2019/0327/155358633945_20190327.JPG"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Inequality is detrimental to society</h3>
        <p className="body-text">
          Inequality is harmful as capitalist economic competition unfairly
          privileges the rich, who have the power to infiltrate and perpetrate
          an unfair system that works to their advantage. “Losers” who are at
          the bottom of the social stratification have little opportunity to
          improve their situation, since those at the top tend to have far more
          political and economic power{" "}
          <a
            className="tag"
            href="https://courses.lumenlearning.com/boundless-sociology/chapter/sociological-theories-and-global-inequality/"
          >
            (lumenlearning, 2020).
          </a>{" "}
          Therefore, inequality results in perpetuating stratification systems
          that prevents the upward mobility of the lower class.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Page2;
