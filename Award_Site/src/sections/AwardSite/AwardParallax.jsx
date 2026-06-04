import Chocolate from "../../assets/images/choclate-bg-2.png";

export default function AwardParallax() {
  return (
    <section className="inner-container h-screen py-20">
      <div
        className="h-full rounded-3xl bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${Chocolate})`,
        }}
      />
    </section>
  );
}
