import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductStyle } from "../styles/ProductStyle";
import { Gallery } from "../styles/Gallery";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../styles/ProductDetails";
import styled from "styled-components";

export function SkeletonLoader() {
  return (
    <Gallery>
      <SkeletonTheme
        color="var(--card-background)"
        highlightColor="var(--card-background)"
      >
        <ProductStyle>
          <Skeleton height={450} width={300} />
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={100} />
        </ProductStyle>
        <ProductStyle>
          <Skeleton height={450} width={300} />
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={100} />
        </ProductStyle>
        <ProductStyle>
          <Skeleton height={450} width={300} />
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={100} />
        </ProductStyle>
        <ProductStyle>
          <Skeleton height={450} width={300} />
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={100} />
        </ProductStyle>
        <ProductStyle>
          <Skeleton height={450} width={300} />
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={100} />
        </ProductStyle>
        <ProductStyle>
          <Skeleton height={450} width={300} />
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={100} />
        </ProductStyle>
      </SkeletonTheme>
    </Gallery>
  );
}

export function DetailSkeletonLoader() {
  return (
    <SkeletonTheme
      color="var(--card-background)"
      highlightColor="var(--card-background)"
    >
      <DetailsStyle>
        <Skeleton height={450} width={300} />
        <ProductInfo>
          <h2>
            <Skeleton />
          </h2>
          <p>
            <Skeleton />
          </p>
          <Quantity>
            <Skeleton />
          </Quantity>
          <Buy>
            <Skeleton />
          </Buy>
        </ProductInfo>
      </DetailsStyle>
    </SkeletonTheme>
  );
}
