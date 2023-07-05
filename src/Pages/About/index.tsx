import styles from "./About.module.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiGit,
  SiNodedotjs,
  SiSass,
  SiFigma,
  SiGithub,
} from "react-icons/si";
export default function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}> Sobre Mim </h2>
      <p className={styles.container__text}>
        Nascido e criado no Rio de Janeiro, atuei como designer durante 9 anos. Hoje atuo na área de Desenvolvimento
        Web.
        <br />
        <br />
        Para entregar o melhor possível para o usuário, me aprofundei em ferramentas e frameworks essenciais para o
        desenvolvimento Full Stack:
      </p>
      <div className={styles.listaStack}>
        <SiHtml5 className={styles.listaStack__item} />
        <SiCss3 className={styles.listaStack__item} />
        <SiJavascript className={styles.listaStack__item} />
        <SiTypescript className={styles.listaStack__item} />
        <SiReact className={styles.listaStack__item} />
        <SiSass className={styles.listaStack__item} />
        <SiGithub className={styles.listaStack__item} />
        <SiFigma className={styles.listaStack__item} />
        <SiMysql className={styles.listaStack__item} />
        <SiMongodb className={styles.listaStack__item} />
        <SiGit className={styles.listaStack__item} />
        <SiNodedotjs className={styles.listaStack__item} />
      </div>
      <p className={styles.container__text}>
        Unindo minhas habilidades em design com a paixão pela tecnologia, obtenho uma visão única e valiosa para
        desenvolvimento de produtos digitais.
      </p>
    </div>
  );
}
