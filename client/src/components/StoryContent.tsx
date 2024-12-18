import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface StoryImage {
  src: string;
  alt: string;
  caption: string;
  captionKey?: string;
}

interface ContentBlock {
  type: 'paragraph' | 'image';
  content: string | StoryImage;
}

interface StoryContentProps {
  content: string;
}

export function StoryContent({ content }: StoryContentProps) {
  const { t } = useTranslation();
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});
  const [errorImages, setErrorImages] = useState<{ [key: string]: boolean }>({});

  // Parse content into blocks using "\n" for new lines
  const blocks = content.split('\n').map((block): ContentBlock => {
    // Check if the block is an image marker
    if (block.startsWith('![') && block.includes('](')) {
      const altMatch = block.match(/!\[(.*?)\]/);
      const srcMatch = block.match(/\((.*?)\)/);
      const captionMatch = block.match(/\{caption:(.*?)\}/);
      if (altMatch && srcMatch) {
        return {
          type: 'image',
          content: {
            src: srcMatch[1],
            alt: altMatch[1],
            caption: altMatch[1],
            captionKey: captionMatch ? captionMatch[1].trim() : undefined,
          },
        };
      }
    }
    return {
      type: 'paragraph',
      content: block,
    };
  });

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => ({ ...prev, [src]: true }));
  };

  const handleImageError = (src: string) => {
    setErrorImages(prev => ({ ...prev, [src]: true }));
  };

  return (
    <div className="prose prose-lg max-w-none">
      {blocks.map((block, index) => {
        if (block.type === 'image') {
          const image = block.content as StoryImage;
          const isLoaded = loadedImages[image.src];
          const hasError = errorImages[image.src];

          return (
            <figure key={index} className="my-8">
              {!hasError ? (
                <>
                  <div className={`relative rounded-lg overflow-hidden ${!isLoaded ? 'min-h-[300px] bg-gray-100 animate-pulse' : ''}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(image.src)}
                      onError={() => handleImageError(image.src)}
                    />
                  </div>
                  <figcaption className="text-center text-muted-foreground mt-2 text-sm italic">
                    {image.captionKey ? t(`stories.captions.${image.captionKey}`) : image.caption}
                  </figcaption>
                </>
              ) : (
                <div className="text-center text-gray-500 italic">
                  Image could not be loaded
                </div>
              )}
            </figure>
          );
        }
        return (
          <p key={index} className="mb-6 text-foreground">
            {block.content as string}
          </p>
        );
      })}
    </div>
  );
}