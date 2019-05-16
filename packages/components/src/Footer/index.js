import React from "react";
import Logo from "../Logo";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import IconButton from "@material-ui/core/IconButton";
import Icon from "../Icon";
import { version } from "../../package.json";

const Footer = props => {
  const icons = {
    gitter: "https://gitter.im/freesewing/freesewing",
    twitter: "https://twitter.com/freesewing_org",
    github: "https://github.com/freesewing",
    instagram: "https://instagram.com/freesewing_org",
    facebook: "https://facebook.com/freesewing.org/"
  };
  const links = {
    docs: {
      blog: "https://" + props.language + ".freesewing.org/blog",
      aboutFreesewing:
        "https://" + props.language + ".freesewing.org/docs/about",
      faq: "https://" + props.language + ".freesewing.org/docs/faq"
    },
    community: {
      becomeAPatron:
        "https://" + props.language + ".freesewing.org/patrons/join",
      makerDocs: "https://" + props.language + ".freesewing.org/docs/",
      devDocs: "https://" + props.language + ".freesewing.dev/"
    }
  };
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
    }
  };
  return (
    <footer>
      <Logo size={101} />
      <p>
        {Object.keys(icons).map(i => (
          <IconButton href={icons[i]} className={i} title={i} key={i}>
            <Icon icon={i} />
          </IconButton>
        ))}
      </p>
      <p>
        <FormattedHTMLMessage id="app.txt-footer" />
      </p>
      <div style={styles.container}>
        {Object.keys(links).map(l => {
          let items = [];
          for (let i of Object.keys(links[l])) {
            items.push(
              <li key={i}>
                <a href={links[l][i]}>
                  <FormattedMessage id={"app." + i} />
                </a>
              </li>
            );
          }
          return (
            <div key={l}>
              <ul>{items}</ul>
            </div>
          );
        })}
      </div>
      <p className="version">{version}</p>
    </footer>
  );
};

export default Footer;
