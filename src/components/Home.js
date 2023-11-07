import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-Y.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section 
          title="New Interior"
          description="Leather Material Finish"
          backgroundImage="new-interior.jpg"
          leftButton="Custom Order"
          rightButton="Existing Inventory"
      />
      <Section
        title="Cheapest Solar Proof amoung Worldwide"
        description="Call to get an offer"
        backgroundImage="solar-roof.jpg"
        leftButton="Book Now"
        rightButton="Know More"
      />
      <Section
        title="Lowest Cost Solar Panels in India"
        description="Money-back gurantee"
        backgroundImage="solar-panel.jpg"
        leftButton="Order Now"
        rightButton="Know More"
      />
      <Section 
          title="Accessories"
          description="Grab it Quicker"
          backgroundImage="accessories.jpg"
          leftButton="Place Order"
          
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  
`;
