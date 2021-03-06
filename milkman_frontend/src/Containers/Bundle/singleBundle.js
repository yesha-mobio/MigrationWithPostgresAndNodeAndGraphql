import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { connect } from "react-redux";

import Header from "../../Components/Core/header";
import { viewBundle } from "../../Redux/Actions/Bundle-Action/bundleAction";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { isAuthenticated } from "../../Authentication/authentication";

class SingleBundle extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    if (isAuthenticated() && isAuthenticated().user.role_id === 1) {
      const {
        viewBundle,
        match: {
          params: { bundle_id },
        },
      } = this.props;
      viewBundle(bundle_id);
    }
  }

  render() {
    const { singleBundle } = this.props;
    const singleBundleForm = singleBundle ? (
      <Container>
        <Row>
          <Col sm="12">
            <Card style={{ marginTop: "50px" }}>
              <CardHeader
                style={{
                  textAlign: "center",
                  color: "#BC1A4B",
                  background: "#1ABC9C",
                }}
              >
                <h5>Single Bundle</h5>
              </CardHeader>
              <CardBody>
                {/* <Spinner /> */}
                <Form>
                  <FormGroup>
                    <Label for="bundleName">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="bundleName"
                      placeholder="Enter the name of the Bundle"
                      value={singleBundle.name}
                      readOnly
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="bundleDescription">Description</Label>
                    <Input
                      type="text"
                      name="description"
                      id="bundleDescription"
                      placeholder="Enter the Description"
                      value={singleBundle.description}
                      readOnly
                    />
                  </FormGroup>
                  <Button
                    onClick={() => this.props.history.push("/displayBundles")}
                    style={{
                      background: "#BC1A4B",
                      color: "#1ABC9C",
                      borderColor: "#BC1A4B",
                    }}
                  >
                    <b>List all Bundles</b>
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    ) : (
      <Container>
        <Row>
          <Col sm="12">
            <Card style={{ marginTop: "50px" }}>
              <CardHeader
                style={{
                  textAlign: "center",
                  color: "#BC1A4B",
                  background: "#1ABC9C",
                }}
              >
                <h5>Single Bundle</h5>
              </CardHeader>
              <CardBody>
                <h3 style={{ color: "red", textAlign: "center" }}>
                  <Spinner />
                </h3>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );

    return (
      <div>
        <Header />
        {isAuthenticated() && isAuthenticated().user.role_id === 1 ? (
          singleBundleForm
        ) : (
          <h1 style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
            You are not Authenticated...!!
          </h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ bundle }) => {
  return {
    error: bundle.error,
    loading: bundle.loading,
    singleBundle: bundle.singleBundle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewBundle: (bundleId) => dispatch(viewBundle(bundleId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SingleBundle));
