import React from "react";
import "./Pages.css";
import Footer from "../Footer";

function Page1() {
  return (
    <div className="container">
      <h1 className="main-header">Inequality today</h1>

      <img
        className="singlePostImg"
        src="https://media.vanityfair.com/photos/5dd83d77e78810000883f5a9/4:3/w_2132,h_1599,c_limit/parasite-oscars-1219-lede.png"
        alt=""
      />

      <div className="sub-container">
        <p className="body-text">
          We live in an era where there is alarming inequality between different
          groups of people. It is a well-known fact that the{" "}
          <a
            className="tag"
            href="https://inequality.org/facts/global-inequality"
          >
            world’s richest 1 percent owns almost half of the world’s wealth.
          </a>{" "}
          In such a world where a select group of individuals have access to
          most of the world’s resources, the disparity that persists between
          different groups of individuals has deep consequence and implications.
          From the moment that we are born, we are subjected to various forms of
          inequality. This inequality can appear in a myriad of forms such as
          income inequality, inequality of opportunities, racial inequality and
          more.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://www.pd.co.ke/wp-content/uploads/2019/09/Inequality.jpg"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Income inequality</h3>
        <p className="body-text">
          Income inequality refers to the notable disparity between different
          groups (individuals, populations, countries, etc) in terms of income
          distribution{" "}
          <a
            className="tag"
            href="https://www.britannica.com/topic/income-inequality"
          >
            (Howard et al, 2020).
          </a>{" "}
          Many countries today are experiencing a widening income gap in their
          populations. This stems from a range of factors, such as shifting
          technological demographics and globalisation.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://images.theconversation.com/files/135431/original/image-20160824-30231-o92zne.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Inequality of opportunities</h3>
        <p className="body-text">
          In many of our societies today, individuals do not have equal access
          to opportunities. The power and influence of wealth, socio-economic
          class, and other factors privilege certain individuals over others by
          reserving valuable opportunities for them. This limits the potential
          of affected individuals as they are unable to seize the necessary
          opportunities to achieve growth and improvement their social standing.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://static01.nyt.com/images/2020/06/09/business/09money/00money-mobileMasterAt3x.jpg"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Racial inequality</h3>
        <p className="body-text">
          Racial inequality stems from the fact that individuals from different
          races have unequal access to opportunities and needs, such as jobs,
          healthcare and voting rights. This rises from the systematic prejudice
          against selected groups- and is still prevalent in certain societies
          today.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Page1;
