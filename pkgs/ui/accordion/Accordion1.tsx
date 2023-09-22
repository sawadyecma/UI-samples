import styles from "./Accordion1Style.css";

const InnerAccordion = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <input id={id} type="checkbox" className="toggle" />
      <label className="Label" htmlFor={id}>
        {title}
      </label>
      <div className="content">{children}</div>
    </>
  );
};

export const Accordion1 = () => {
  return (
    <section className="accordion">
      <InnerAccordion title="ラベル1" id="accordion_01">
        <p>
          コンテンツが
          <br />
          ここに入ります
        </p>
      </InnerAccordion>
      <InnerAccordion title="ラベル2" id="accordion_02">
        <p>
          コンテンツが
          <br />
          ここに入ります
        </p>
      </InnerAccordion>
      <InnerAccordion title="ラベル3" id="accordion_03">
        <p>
          コンテンツが
          <br />
          ここに入ります
        </p>
      </InnerAccordion>
    </section>
  );
};
