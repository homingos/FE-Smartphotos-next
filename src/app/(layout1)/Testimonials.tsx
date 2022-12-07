import Image from 'next/image';

const data = [
  [
    {
      name: 'Olaia irigoyen',
      username: 'olaiairi',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-1.webp',
      comment:
        'Our customers have experienced the magical video prints and never looked back ever since!',
    },
    {
      name: 'Amelie',
      username: 'AmelieStrom',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-2.webp',
      comment:
        "Sent our son's birthday SmartPhoto to grandma. She was as happy as I'd ever seen her!",
    },
    {
      name: 'Olaia irigoyen',
      username: 'olaiairi',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-1.webp',
      comment: 'This reminds me of Harry Potter! So Magical!',
    },
  ],
  [
    {
      name: 'Bryce Bjork',
      username: 'Bryce',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-3.webp',
      comment: 'Magical!',
    },
    {
      name: 'Lauren Will',
      username: 'willlau',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-1.webp',
      comment:
        'Getting my first SmartPhoto was so exciting! The AR experience along with the video was a nice touch!',
    },
    {
      name: 'Bryce Bjork',
      username: 'Bryce',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-4.webp',
      comment: 'Received this as a gift and never expected it to be so amazing!',
    },
  ],
  [
    {
      name: 'Olaia irigoyen',
      username: 'olaiairi',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-2.webp',
      comment:
        "It's so lovely to have my Graduation Day preserved in this SmartPhoto with Photo & Video!",
    },
    {
      name: 'Amelie',
      username: 'AmelieStrom',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-3.webp',
      comment: "I'm in love with this!",
    },
    {
      name: 'Olaia irigoyen',
      username: 'olaiairi',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-2.webp',
      comment: 'My wife loved this! I made a SmartPhoto of our wedding and it was priceless!',
    },
  ],
  [
    {
      name: 'Lauren Will',
      username: 'willlau',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-3.webp',
      comment:
        ' I can never go back to normal photos again! The SmartPhotos experience has been so exciting!',
    },
    {
      name: 'Bryce Bjork',
      username: 'Bryce',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-4.webp',
      comment: 'This has made my holiday gifting so easy!',
    },
    {
      name: 'Bryce Bjork',
      username: 'Bryce',
      avatar_url:
        'https://homingos-magik.s3.ap-south-1.amazonaws.com/smartphotos-website/landing/testimonials/sm-testimonials-2.webp',
      comment: 'Magical!',
    },
  ],
];

const Testimonials = () => {
  return (
    <div className="h-[60rem] px-[10%] py-20">
      <div className="mb-10 flex flex-col items-center gap-6 text-center">
        <h2 className="bg-gradient-to-r from-brand_blue_4 to-brand_blue_5 bg-clip-text text-7xl font-black text-transparent">
          Over 1 Million Memories, Re-Lived!
        </h2>
        <p className="w-1/2 text-2xl font-medium text-brand_gray_2">
          Our customers have experienced the magical video prints and never looked back ever since!
        </p>
      </div>
      <div className="relative p-10">
        <div className="grid grid-cols-4 gap-4">
          {data.map((item, i) => {
            return (
              <div key={`item_${i}`} className="flex w-full flex-col gap-6">
                {item.map((subItem, ind) => {
                  return (
                    <div
                      key={`subItem_${ind}`}
                      className={`h-min w-full rounded-3xl bg-brand_white p-6 shadow-xl `}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image src={subItem.avatar_url} alt={subItem.username} fill />
                        </div>
                        <div>
                          <p className="text-md font-black text-brand_black">{subItem.name}</p>
                          <p className="text-sm text-brand_gray_6">@{subItem.username}</p>
                        </div>
                      </div>
                      <p className="text-brand_black">{subItem.comment}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-brand_white via-transparent to-brand_white '>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
