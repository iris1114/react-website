import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Stage, Layer, Text, Rect } from "react-konva";
import { BREAKPOINTS, COLOR } from "../../utils/styles";
import { FormControl } from "react-bootstrap";
import Decoration from "../../components/card/Decoration";
import Button from "../../components/common/Button";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const CardBackSection = ({ decorations, onBackPreview }) => {
  const initialRectangles = [
    {
      x: 10,
      y: 10,
      width: 75,
      height: 75,
      id: "rect1",
      name: "",
    },
  ];

  const [rectangles, setRectangles] = useState(initialRectangles);
  const [selectedId, selectShape] = useState(null);
  const [cardSize, setCardSize] = useState({ width: null, height: null });
  const [text, setText] = useState("double click to edit");
  const [editable, setEditable] = useState(false);
  const cardRef = useRef();
  const stageRef = useRef(null);
  const [textFontSize, setTextFontSize] = useState(20);

  useEffect(() => {
    if (window.innerWidth > BREAKPOINTS.xl) {
      setCardSize({
        width: 600,
        height: 420,
      });
      setTextFontSize(30);
    } else if (window.innerWidth > BREAKPOINTS.md) {
      setCardSize({
        width: 490,
        height: 345,
      });
      setTextFontSize(24);
    } else if (window.innerWidth > 400) {
      setCardSize({
        width: 355,
        height: 245,
      });
      setTextFontSize(20);
    } else if (window.innerWidth > 350) {
      setCardSize({
        width: 315,
        height: 245,
      });
      setTextFontSize(16);
    } else {
      setCardSize({
        width: 260,
        height: 220,
      });
      setTextFontSize(16);
    }
  }, []);

  const handleStageMouseDown = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const handleTextKeyPress = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      setEditable(true);
    } else if (e.key === "Enter") {
      setEditable(false);
    }
  };

  const handleDecoClick = (e, deco, index) => {
    e.preventDefault();
    setRectangles([
      ...rectangles,
      {
        x: 10,
        y: 10,
        width: 75,
        height: 75,
        id: `rect${uuidv4()}`,
        name: deco,
        draggable: true,
      },
    ]);
  };

  const handleClearClick = () => {
    setRectangles(initialRectangles);
    setText("double click to edit");
    setEditable(false);
  };

  const handleDoneClick = () => {
    const uri = stageRef.current.toDataURL();
    onBackPreview && onBackPreview(uri);
    Swal.fire({
      icon: "success",
      title: "Custom Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <StyledCardBackSection>
      <h3 className="f-lg-3xl text-center mb-3">Card - Back</h3>
      <div className="d-flex align-items-center flex-wrap">
        <div className="col-12 col-md-7 card-area">
          <div className="stage-wrap" ref={cardRef}>
            <Stage
              background={"#fff"}
              width={cardSize.width}
              height={cardSize.height}
              onMouseDown={handleStageMouseDown}
              onTouchStart={handleStageMouseDown}
              ref={stageRef}
              onClick={() => {
                setEditable(false);
              }}
              onTap={() => {
                setEditable(false);
              }}
            >
              <Layer>
                <Rect
                  x={0}
                  y={0}
                  width={cardSize.width}
                  height={cardSize.height}
                  fillLinearGradientStartPoint={{ x: 0, y: 0 }}
                  fillLinearGradientEndPoint={{
                    x: cardSize.width,
                    y: cardSize.height,
                  }}
                  fillLinearGradientColorStops={[0, "#fff"]}
                  listening={false}
                ></Rect>
                {rectangles.map((rect, index) => {
                  return (
                    <Decoration
                      key={rect.id}
                      shapeProps={rect}
                      selectedImage={rect.name}
                      isSelected={rect.id === selectedId}
                      onSelect={() => {
                        selectShape(rect.id);
                      }}
                      onChange={(newAttrs) => {
                        const rects = rectangles.slice();
                        rects[index] = newAttrs;
                        setRectangles(rects);
                      }}
                    />
                  );
                })}

                {!editable && (
                  <Text
                    lineHeight={1.4}
                    fontSize={textFontSize}
                    align={"left"}
                    fontFamily={"'Caveat', cursive"}
                    fontStyle={20}
                    text={text}
                    x={50}
                    y={100}
                    draggable
                    wrap="word"
                    width={cardSize.width - 100}
                    className="text"
                    onDblClick={(e) => {
                      setEditable(true);
                    }}
                    onTap={(e) => {
                      setEditable(true);
                    }}
                  ></Text>
                )}
              </Layer>
            </Stage>

            {editable && (
              <FormControl
                as="textarea"
                className="text-form"
                value={text}
                placeholder="write down your wishes"
                onKeyPress={handleTextKeyPress}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            )}
          </div>
        </div>
        <div className="col-12 col-md-5 select-area">
          <div className=" d-flex flex-wrap">
            {decorations.map((deco, index) => {
              deco = deco.attachments;
              return (
                <div
                  key={index}
                  className="col-3 mb-3 option-card"
                  onClick={(e) => {
                    handleDecoClick(e, deco, index);
                  }}
                >
                  <img src={deco} alt="card" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center m-2">
          <div className="mr-2">
            <Button text="Clear" onButtonClick={handleClearClick} />
          </div>
          <Button
            text="Done"
            variant="primary"
            onButtonClick={handleDoneClick}
          />
        </div>
      </div>
    </StyledCardBackSection>
  );
};

const StyledCardBackSection = styled.section`
  margin: 50px 0px;
  background-color: ${COLOR.darkBrown};
  padding: 15px;
  postion: relative;

  @media (max-width: ${BREAKPOINTS.sm}px) {
    margin: 30px 0px;
    padding: 15px 0px;
  }

  .card-area {
    width: 100%;

    overflow: hidden;

    @media (max-width: ${BREAKPOINTS.sm}px) {
      height: 250px;
    }

    .stage-wrap {
      height: 420px;
      width: 100%;
      position: relative;

      .text-form {
        width: 90%;
        position: absolute;
        top: 20%;
        left: 5%;
        height: 40%;

        @media (max-width: ${BREAKPOINTS.sm}px) {
          height: 20%;
        }
      }
    }
  }

  .select-area {
    background-color: ${COLOR.lightBrown};
    width: 100%;
    height: 450px;
    overflow: scroll;
    padding: 15px;

    @media (max-width: ${BREAKPOINTS.sm}px) {
      height: 380px;
    }

    .option-card {
      cursor: pointer;
    }
  }
`;

export default CardBackSection;
