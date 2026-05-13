export type FeaturedPiece = {
  title: string;
  category: string;
  copy: string;
  image: string;
  alt: string;
};

export const featuredPieces: FeaturedPiece[] = [
  {
    title: "Heritage Bridal Collar",
    category: "Bridal Sets",
    copy: "A dramatic gold setting with pearl rhythm and ruby detail for wedding-day presence.",
    image: "/images/bridal-set.jpg",
    alt: "Gold bridal necklace with ruby and pearl details on black velvet",
  },
  {
    title: "Velvet Gold Necklace",
    category: "Traditional Gold",
    copy: "Classic gold work presented with a refined boutique finish for milestone occasions.",
    image: "/images/featured-necklace.jpg",
    alt: "Traditional gold necklace displayed on a black jewelry bust",
  },
  {
    title: "Statement Occasion Piece",
    category: "Statement Pieces",
    copy: "A celebration-ready piece with intricate detail, warm shine, and heirloom character.",
    image: "/images/statement-piece.jpg",
    alt: "Statement gold jewelry piece on black velvet",
  },
];
