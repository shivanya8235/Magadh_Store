import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import toast from "react-hot-toast";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWishlist, removeFromWishlistById } from "../store/WishListSlice";

const Productcard = (props) => {
  const { images, title, description, id, name, price, category, instock } =
    props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const findProduct = (product) => product.id === id;
  const index = cart.findIndex(findProduct);
  const navigate = useNavigate();
  const handleAddToCart = () => {
    if (index == -1) {
      dispatch(addToCart(props));
      toast.success("Added to cart");
    } else {
      navigate("/cart");
    }
  };
  const isProductInWishlist = wishlist.find(product => product.id === id);
  const handleAddToWishlist = () => {
    if (!isProductInWishlist) {
      dispatch(addToWishlist(props));
      toast.success("Added to wishlist");
    } else {
      dispatch(removeFromWishlistById(id))
      toast.success("Removed from wishlist");
    }
  };
  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={images[0]}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="3" spacing="2">
            <Heading size="md">{title}</Heading>
            <Text className="line-clamp-2">{description}</Text>
            <Text color="blue.600" fontSize="lg">
              {price}
            </Text>
          </Stack>
          <Stack direction={"row"} justify={"space-between"}>
            <Button
              onClick={handleAddToCart}
              variant="solid"
              colorScheme="blue"
              width={"50%"}
            >
              {index != -1 ? "Go to cart" : "Add to cart"}
            </Button>
            <Button
              onClick={handleAddToWishlist}
              variant="solid"
              colorScheme="blue"
              width={"50%"}
            >
             {isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"}
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default Productcard;
