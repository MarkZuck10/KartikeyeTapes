import { filter, map } from "lodash";
import React from "react";
import products from "../../constants/products";
import { useParams } from "react-router";
import NotFound from "../extra/404";
import { useBulmaLayout } from "../../hooks/layout";
import { ImageList, ImageListItem } from "@mui/material";
import { Image } from "antd";
import Title from "antd/es/typography/Title";

const ProductDescription = () => {
  const { key } = useParams();
  const i = filter(products, ({ key: k }) => k === key);

  const item = i.length > 0 ? i[0] : null;

  const { mobile, tablet, desktop } = useBulmaLayout();

  const images = [];

  if (item) for (let i = 1; i <= item.count; i++) images.push(i);

  return (
    <div className="container py-6">
      {!item ? (
        <NotFound />
      ) : (
        <div>
          <Title level={2} className="has-text-centered mb-6">
            {item.label}
          </Title>
          <ImageList cols={mobile ? 2 : tablet ? 3 : desktop ? 4 : 5}>
            {map(images, (image) => (
              <ImageListItem key={image}>
                <Image
                  src={`/${item.imageBase}/${image}.jpg`}
                  alt={`${item.label} | Kartikeye Tapes`}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
