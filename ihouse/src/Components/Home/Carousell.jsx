import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import "./styles.css";
import { useTranslation } from 'react-i18next';


import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button
} from "@material-ui/core";

function Banner(props) {

        // Translator
        const { t } = useTranslation();

  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className="Content">
        <Typography className="Title">{props.item.Name}</Typography>

        <Typography className="Caption">{props.item.Caption}</Typography>

        <Button variant="outlined" href="/courses" className="ViewButton">
        {t("home.more")}
        </Button>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia className="Media" image={item.Image} title={item.Name}>
          <Typography className="MediaCaption">{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
}


const items = [
  {
    Name: "Dasturlash kurslari",
    Caption: "Dasturlash bo`yicha malakali mutaxasislardan proffesional darslar!",
    contentPosition: "left",
    Items: [
      {
        Name: "Web Dasturlash",
        Image: "https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067"
      },
      {
        Name: "Mobil Dasturlash",
        Image: "https://static.wixstatic.com/media/554905_e9331d88af7443c7ace191cb7b7b5fa1~mv2.gif"
      }
    ]
  },
  {
    Name: "Elektron Kommersiya",
    Caption: "Treyding bo`yicha proffesional darslar!",
    contentPosition: "middle",
    Items: [
      {
        Name: "Elektron Kommersiya",
        Image: "https://thynxlabs.com/wp-content/uploads/2020/02/e-commerce.gif"
      },
      {
        Name: "Treyding",
        Image: "https://nirmalexpertsolutions.com/photo/ecommerce.gif"
      }
    ]
  },
  {
    Name: "Moushen Grafika",
    Caption: "Moushen grafika va 3D Modellashtirish kurslari!",
    contentPosition: "right",
    Items: [
      {
        Name: "Moushen Grafika",
        Image: "https://blog.advids.co/wp-content/uploads//2017/06/Motion-Graphics1-min.gif"
      },
      {
        Name: "3D Modellashtirish",
        Image: "https://thumbs.gfycat.com/ImpureTestyAlaskanmalamute-size_restricted.gif"
      }
    ]
  }
];

class Carousell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true
    };

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay
    });
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators
    });
  }

  toggleNavButtonsAlwaysVisible() {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
    });
  }

  toggleNavButtonsAlwaysInvisible() {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
    });
  }

  toggleCycleNavigation() {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation
    });
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value
    });
  }

  changeTimeout(event, value) {
    this.setState({
      timeout: value
    });
  }

  render() {
    return (
      <div style={{ marginTop: "85px", color: "#494949" }}>

        <Carousel
          className="Example"
          autoPlay={this.state.autoPlay}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          cycleNavigation={this.state.cycleNavigation}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
          next={(now, previous) =>
            console.log(
              `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          prev={(now, previous) =>
            console.log(
              `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          onChange={(now, previous) =>
            console.log(
              `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          //   fullHeightHover={false}
          // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
            // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
          // indicatorContainerProps={{style: {margin: "20px"}}}
          //   NextIcon='next'
        >
          {items.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Carousell;
