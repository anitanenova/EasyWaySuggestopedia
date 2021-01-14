import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ScheduleType, IState, IGallery } from "../../declarations/interfaces";
import { fetchGalery } from "../../store/Actions/Galery";
import Gallery from "react-grid-gallery";

interface IGalleryProps {
  load: any;
  images: IGallery[];
  isLoading: boolean;
}

const GalleryImages = (props: IGalleryProps) => {
  useEffect(() => {
    props.load();
  }, []);

  let result = <div>Зареждане...</div>;

  if (!props.isLoading) {
    let images = props.images.map((item) => {
      return {
        src: item.image,
        thumbnail: item.image.addCloudinaryProps("h_180"),
        thumbnailWidth: "auto",
        thumbnailHeight: 180,
        caption: item.name,
      };
    });

    result = <Gallery images={images} />;
  }

  return result;
};

const mapStateToProps = (rsdusers: any) => {
  let state: IState<IGallery[]> = rsdusers.galleryReducer;
  return {
    images: state.data,
    isLoading: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    load: (type: ScheduleType) => dispatch(fetchGalery()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryImages);
