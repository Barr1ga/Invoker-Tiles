import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Infoker Tiles</title>
        <meta name="keywords" content="invoker, tiles"></meta>
      </Head>
      <div className="h-screen bg-zinc-800 overflow-hidden">
        <div className={styles.perspective}>
          <div className={styles.transform}>
            <div className="flex h-full flex-col p-20 pt-0">
              <div className="flex gap-5 flex-1 justify-center text-white p-10 pt-0">
                <div className="path h-full bg-zinc-600">
                  <div className="h-32 w-32 bg-zinc-700 rounded-lg flex justify-center items-center">
                    1asd
                  </div>
                </div>
                <div className="path h-full bg-zinc-600">
                  <div className="h-32 w-32 bg-zinc-700 rounded-lg flex justify-center items-center">
                    1asd
                  </div>
                </div>
                <div className="path h-full bg-zinc-600">
                  <div className="h-32 w-32 bg-zinc-700 rounded-lg flex justify-center items-center">
                    1asd
                  </div>
                </div>
                <div className="path h-full bg-zinc-600">
                  <div className="h-32 w-32 bg-zinc-700 rounded-lg flex justify-center items-center">
                    1asd
                  </div>
                </div>
              </div>

              <div className="skills flex justify-center gap-5">
                <div className="h-32 w-32 bg-zinc-700 rounded-lg flex justify-center items-center">
                  Q
                </div>
                <div className="h-32 w-32 bg-zinc-700 rounded-lg flex justify-center items-center">
                  W
                </div>
                <div className="h-32 w-32 bg-zinc-700 rounded-lg flex justify-center items-center">
                  W
                </div>
                <div className="h-32 w-32 bg-zinc-700 rounded-lg flex justify-center items-center">
                  R
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
