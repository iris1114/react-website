import { Image, Transformer } from "react-konva";
import useImage from "use-image";
import React, { useEffect, useRef } from "react";

const Decoration = ({
  shapeProps,
  selectedImage,
  isSelected,
  onSelect,
  onChange,
}) => {
  const [image] = useImage(selectedImage, "Anonymous");
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const handleOnDragEnd = (e) => {
    onChange({
      ...shapeProps,
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  const handleOnTransformEnd = (e) => {
    const node = shapeRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    node.scaleX(1);
    node.scaleY(1);
    node.width(Math.max(5, node.width() * scaleX));
    node.height(Math.max(node.height() * scaleY));

    onChange({
      ...shapeProps,
      x: node.x(),
      y: node.y(),
      width: node.width(),
      height: node.height(),
    });
  };

  const handleBoundBoxFunc = (oldBox, newBox) => {
    if (newBox.width < 5 || newBox.height < 5) {
      return oldBox;
    }
    return newBox;
  };

  return (
    <>
      <Image
        image={image}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={handleOnDragEnd}
        onTransformEnd={handleOnTransformEnd}
      />
      {isSelected && (
        <Transformer ref={trRef} boundBoxFunc={handleBoundBoxFunc} />
      )}
    </>
  );
};

export default Decoration;
