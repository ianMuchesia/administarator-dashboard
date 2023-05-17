import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "../../store/api";
import Header from "../../components/Header";
import { ThemeOptions } from "../../@types/pallette";
import { ProductStat } from "../../@types/types";

interface Props {
    item:  ProductStat;
    
}


const SingleProduct=({item}:Props)=>{

    const theme = useTheme() as ThemeOptions;
  const [isExpanded, setIsExpanded] = useState(false);
    return(
        <Card
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.alt,
          borderRadius: "0.55rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color={theme.palette.secondary[700]}
            gutterBottom
          >
            {item.product.category}
          </Typography>
          <Typography variant="h5" component="div">
            {item.product.name}
          </Typography>
          <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
            ${Number(item.product.price).toFixed(2)}
          </Typography>
          <Rating value={item.product.rating} readOnly />
  
          <Typography variant="body2">{item.product.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            See More
          </Button>
        </CardActions>
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
          sx={{
            color: theme.palette.neutral[300],
          }}
        >
          <CardContent>
            <Typography>id: {item.product._id}</Typography>
            <Typography>Supply Left: {item.product.supply}</Typography>
            <Typography>
              Yearly Sales This Year: {item.yearlySalesTotal}
            </Typography>
            <Typography>
              Yearly Units Sold This Year: {item.yearlyTotalSoldUnits}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
}


const Products = () => {

    const { data,error, isLoading } = useGetProductsQuery();

    const isNonMobile = useMediaQuery("(min-width: 1000px)");

    
  return (
    <Box m="1.5rem 2.5rem">
    <Header title="PRODUCTS" subtitle="See your list of products."/>
    {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
            {data.products.map(
            (item) => (
              <SingleProduct
                key={item._id}
                item={item}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
   </Box>
  )
}

export default Products