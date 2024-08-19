import { RichEmbedAuthor } from './RichEmbedAuthor';
import { RichEmbedField } from './RichEmbedField';
import { RichEmbedFooter } from './RichEmbedFooter';
import { RichEmbedImage } from './RichEmbedImage';
import { RichEmbedProvider } from './RichEmbedProvider';
import { RichEmbedThumbnail } from './RichEmbedThumbnail';
import { RichEmbedVideo } from './RichEmbedVideo';

export interface RichEmbed {
    author?: null | RichEmbedAuthor;
    color?: number | null;
    description?: string | null;
    fields?: RichEmbedField[] | null;
    footer?: null | RichEmbedFooter;
    image?: null | RichEmbedImage;
    provider?: null | RichEmbedProvider;
    thumbnail?: null | RichEmbedThumbnail;
    /** Format: date-time */
    timestamp?: string | null;
    title?: string | null;
    type?: string | null;
    /** Format: uri */
    url?: string | null;
    video?: null | RichEmbedVideo;
}