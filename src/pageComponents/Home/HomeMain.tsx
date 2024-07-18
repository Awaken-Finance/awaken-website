'use client';
import NavFooter from '@/components/NavFooter';
import NavHeader from '@/components/NavHeader';
import { ROUTER } from '@/constants/enum';
import { useUserAgent } from '@/hooks/useUserAgent';
import BrandModule from '@/modules/BrandModule';
import { IHomePageProps } from '@/types/pages/home';
import GraphicTextModule from '@/modules/GraphicTextModule';
import { ModuleType } from '@/types/modules';
import { useCallback, useState } from 'react';
import { useEffectOnce } from 'react-use';
import CardListModule from '@/modules/CardListModule';
import PartnersModule from '@/modules/PartnersModule';
import FeatureCardModule from '@/modules/FeatureCardModule';
import InfiniteScrollCarouselModule from '@/modules/InfiniteScrollCarouselModule';
import { ButtonBelowTextModule } from '@/modules/ButtonBelowText';
import clsx from 'clsx';

export default function HomeMain({ headerData, footerData, pageData, globalConfig }: IHomePageProps) {
  const uaType = useUserAgent();

  const [isShow, setIsShow] = useState(false);
  const setGlobalConfig = useCallback(async () => {
    if (typeof document !== 'undefined') {
      const colorObj = {
        ...globalConfig.themeColor,
        ...globalConfig.functionalColor,
        ...globalConfig.neutralColor,
      };
      Object.entries(colorObj).forEach((ele) => {
        document?.body.style.setProperty(`--${ele[0]}`, ele[1]);
      });
      setIsShow(true);
    }
  }, [globalConfig]);

  useEffectOnce(() => {
    setGlobalConfig();
  });

  return (
    <main className={clsx('home-page', !isShow && 'home-page-hide')}>
      <NavHeader path={ROUTER.DEFAULT} data={headerData} />
      <div className="empty-container" style={{ height: 80 }}></div>

      {Array.isArray(pageData?.moduleList) &&
        pageData?.moduleList?.map((module, index) => {
          if (module.key === ModuleType.BrandModule) {
            return (
              <BrandModule key={pageData.key + '_' + index + '_' + module.key} type={uaType} moduleData={module} />
            );
          }
          if (module.key === ModuleType.GraphicTextModule) {
            return <GraphicTextModule key={pageData.key + '_' + index + '_' + module.key} module={module} />;
          }
          if (module.key === ModuleType.CardListModule) {
            return <CardListModule key={pageData.key + '_' + index + '_' + module.key} moduleData={module} />;
          }
          if (module.key === ModuleType.PartnersModule) {
            return <PartnersModule key={pageData.key + '_' + index + '_' + module.key} module={module} />;
          }
          if (module.key === ModuleType.FeatureCardModule) {
            return <FeatureCardModule key={pageData.key + '_' + index + '_' + module.key} module={module} />;
          }
          if (module.key === ModuleType.InfiniteScrollCarouselModule) {
            return <InfiniteScrollCarouselModule key={pageData.key + '_' + index + '_' + module.key} module={module} />;
          }
          if (module.key === ModuleType.ButtonBelowTextModule) {
            return <ButtonBelowTextModule key={pageData.key + '_' + index + '_' + module.key} module={module} />;
          }
          return <></>;
        })}

      <NavFooter data={footerData} />
    </main>
  );
}
