import { FaFacebook } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import "./index.css";

const Icons = ({ quote }) => {
    const styles = {
        fontSize: '1em',
        marginLeft: '0.5px',
        color: 'black',
        cursor: 'pointer',
    };

  return (
    <div>
      <div id="social-icons">
        <a
         id="tweet-quote"
         href={`https://twitter.com/intent/tweet?text=${quote.quote} ${quote.author}`}
         target="_blank"
         rel="noopener noreferrer"
         className="icon"
       >
        <FaTwitter style={styles} />
       </a>
       <a
        id="whatsapp-quote"
        href={`https://api.whatsapp.com/send?text=${quote.quote} ${quote.author}`}
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <SiWhatsapp style={styles} />
      </a>
        <a
        id="facebook-quote"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quote.quote)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="icon"
      >
        <FaFacebook style={styles} />
      </a>
     </div>
    </div>
  )
}

export default Icons