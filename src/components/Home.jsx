import { Button, Text, Input, useToasts, Snippet } from "@geist-ui/react";
import axios from "axios";
import { useState } from "react";

const Home = ({ setThemeType }) => {
  const [longurl, setLongurl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [load, setLoad] = useState(false);
  const [toasts, setToast] = useToasts();

  const getShortUrl = async () => {
    if (longurl.includes("http")) {
      setLoad(true);
      await axios
        .post(`${process.env.REACT_APP_1}`, {
          url: longurl,
        })
        .then((res) => {
          setShorturl(res.data.shortUrl);
          setLoad(false);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setToast({ text: "Enter a valid URL" });
    }
  };
  return (
    <>
      <div className="container">
        <Text
          h1
          size={40}
          style={{ textAlign: "center", padding: "30px 0px", fontWeight: 900 }}
        >
          Instant short URL generator
        </Text>
        <Input
          placeholder="paste long url here"
          style={{ textAlign: "center" }}
          required
          onChange={(e) => setLongurl(e.target.value.trim())}
          size="large"
          width="100%"
        />
        <Button
          onClick={getShortUrl}
          loading={load}
          disabled={load}
          style={{ display: "block", margin: "20px auto" }}
          shadow
          type="warning"
        >
          trim
        </Button>
        {shorturl.length > 0 && (
          <>
            <Text h3 style={{ textAlign: "center" }}>
              Trimmed URL
            </Text>
            <Snippet text={`https://trim-url.vercel.app/${shorturl}`} width="100%" />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
