import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask
} from "mdbreact";

class ChartsPage extends Component {
  state = {
    dataDoughnut: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774"
          ]
        }
      ]
    }
  };
  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Radar chart</h3>
        <Doughnut
          data={this.state.dataDoughnut}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

class CarouselPage extends Component {
  render() {
    return (
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Strong mask</h3>
              <p>Second text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Slight mask</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg"
                alt="Mattonit's item"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Sopot Beach</h3>
              <p>Taken june 21th by @mattonit</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    );
  }
}

export default () => {
  return (
    <>
      <CarouselPage />
      <ChartsPage />
    </>
  );
};
